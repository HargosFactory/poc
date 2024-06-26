<script setup lang="ts">
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-icons/dist/customer.js";
import "@ui5/webcomponents-icons/dist/menu2.js"
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Title.js";
import { defineProps, defineEmits } from 'vue';

interface Props {
    primaryTitle: string;
    secondaryTitle: string;
    logo?: string;
    logo2?: string;
}

defineProps<Props>();
const emit = defineEmits(['returnBack']);   
const useReturnBack = () => {
    emit('returnBack');
};
</script>

<template>
    <div class="rounded-xl shadow-xl bg-white px-2">
        <ui5-shellbar :primary-title="primaryTitle" :secondary-title="secondaryTitle">
            <ui5-avatar slot="profile" icon="customer"></ui5-avatar>
            <img v-if="logo === undefined" slot="logo" src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" />
            <img v-else slot="logo" :src="logo" />
            <ui5-button icon="menu2" slot="startButton" @click="useReturnBack"></ui5-button>
        </ui5-shellbar>
    </div>
</template>