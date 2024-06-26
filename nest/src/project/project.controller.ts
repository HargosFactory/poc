import {
  Req,
  HttpStatus,
  Res,
  Post,
  Body,
  BadRequestException,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { postTimeSheet } from './schemas/timeSheet.schema';
import { calculateTimeDifference } from 'src/utils/globals';
import { env } from 'src/utils/env';
import { CsrfTimeSheetPostInterceptor } from './hooks/csrfTimeSheetPost.hook';

@Controller('project')
export class ProjectController {
  public wrappedAxios: any;

  constructor() {
    this.wrappedAxios = wrapper(axios);
  }

  @Post()
  @UseInterceptors(new CsrfTimeSheetPostInterceptor())
  async getProject(
    @Req() req: any,
    @Body() body: Zod.infer<typeof postTimeSheet>,
    @Res() res: Response,
  ) {
    try {
      console.log('CSRF Token:', req.headers['X-CSRF-Token']);
      console.log('Cookies:', req.cookieJar);
      console.log('Headers:', req.headers);
      const configPost = {
        method: 'post',
        url: env.URL_WORK_SHEET,
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              `${env.USERNAME_WORK_SHEET}:${env.PASSWORD_WORK_SHEET}`,
            ).toString('base64'),
          'x-csrf-token': req.headers['X-CSRF-Token'],
          'Content-Type': 'application/json',
          dataserviceversion: '2.0',
          cookie: req.cookieJar.getCookieStringSync(env.URL_WORK_SHEET),
        },
        data: {
          TimeSheetDataFields: {
            ControllingArea: 'A000',
            SenderCostCenter: '10101101',
            ReceiverCostCenter: '10101101',
            ActivityType: '8',
            WBSElement: 'R.0000012',
            RecordedHours: calculateTimeDifference(
              Number(body.start),
              Number(body.end),
              'hours',
            ).toString(),
            TimeSheetWrkLocCode: 'BUR',
            TimeSheetOvertimeCategory: 'OVE1',
          },
          PersonWorkAgreementExternalID: 'NLAU',
          CompanyCode: '1010',
          TimeSheetDate: `/Date(${body.start})/`,
          TimeSheetIsReleasedOnSave: true,
          TimeSheetOperation: 'C',
        },
        withCredentials: true,
      };
      console.log('Data to be sent:', configPost);
      await this.wrappedAxios(configPost)
        .then((response) => {
          res.status(HttpStatus.OK).json(response.data.d.results);
        })
        .catch((err) => {
          throw new BadRequestException(err);
        });
    } catch (err) {
      res
        .status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err })
        .send();
    }
  }
}
