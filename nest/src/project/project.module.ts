import { Module } from '@nestjs/common';

// CONTROLLER
import { ProjectController } from './project.controller';

// SERVICE
import { ProjectService } from './services/project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
