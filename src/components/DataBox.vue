<template>
    <div>
        <v-container fluid >
            <v-row dense >
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card class="mx-auto blue lighten-4" max-width="344" min-width="200">
                        <v-card-text class="d-flex flex-column align-center justify-space-around">
                            <h1 class="display-2 deep-purple--text" v-text="card.title">
                            </h1>
                                <h1 class="my-4">New:231</h1>
                                <h1 class="my-4">Total:231</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            cards: [{
                    title: 'Cases',
                },
                {
                    title: 'Deaths',
                },
            ],
        }),
    }
</script>

<style>

</style>