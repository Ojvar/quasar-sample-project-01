<template>
    <q-page class="flex flex-center" padding>
        <div class="column justify-center items-center">
            <q-card class="my-card">
                <q-img :src="character.img" @click="alert = true" />

                <q-card-section class="text-center">
                    <div class="text-h6">{{ character.name }}</div>
                    <div class="text-subtitle2">{{ character.nickname }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-chip
                        v-for="(occupation, index) in character.occupation"
                        color="teal"
                        :key="index"
                    >
                        {{ occupation }}
                    </q-chip>
                </q-card-section>
            </q-card>

            <q-dialog v-model="alert">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">Birth Information</div>
                    </q-card-section>

                    <q-card-section class="text-center">
                        {{ character.birthday }}
                    </q-card-section>

                    <q-card-actions align="right">
                        <q-btn flag label="OK" color="primary" v-close-popup>
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </q-page>
</template>

<script lang="ts">
import { QSpinnerCube } from "quasar";

export default {
    name: "ProfilePage",

    data: () => ({
        character: {},
        alert: false,
    }),

    computed: {
        id() {
            return this.$route.params.id;
        },
    },

    async created() {
        this.$q.loading.show({
            message: "Loading",
            spinnerColor: "primary",
            spinner: QSpinnerCube,
        });

        const id =
            this.$route.params.id != "random"
                ? this.$route.params.id
                : Math.floor(Math.random() * 50);

        this.$axios
            .get(`https://www.breakingbadapi.com/api/characters/${id}`)
            .then((res) => {
                this.character = res.data[0] || {};
            })
            .then((err) => {
                this.$q.loading.hide();
            });
    },
};
</script>

<style scoped lang="scss">
.my-card {
    min-width: 20vw;
}
</style>
