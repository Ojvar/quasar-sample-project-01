<template>
    <q-layout view="lhh lpr lFf">
        <q-header
            reveal
            class="bg-primary text-white justify-center row"
            height-hint="98"
        >
            <q-toolbar class="col">
                <q-toolbar-title> Title </q-toolbar-title>
            </q-toolbar>

            <q-tabs class="">
                <q-route-tab replace to="/" label="Home" />
                <q-route-tab replace to="/contact" label="Contact us" />
                <q-route-tab replace to="/about" label="About us" />
                <q-route-tab replace to="/profile/1" label="Profile 1" />
                <q-route-tab replace to="/profile/2" label="Profile 2" />
                <q-route-tab
                    replace
                    to="/profile/random"
                    label="Profile Random"
                />
            </q-tabs>
        </q-header>

        <q-page-container>
            <router-view :key="$route.params.id" />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const leftDrawerOpen = ref(false);
        const rightDrawerOpen = ref(false);

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },

            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value;
            },
        };
    },
};
</script>
