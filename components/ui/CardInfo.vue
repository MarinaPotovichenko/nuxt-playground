<template>
    <v-card outlined>
        <v-card-title v-if="title"> {{ title }} </v-card-title>

        <v-card-subtitle v-if="subtitle"> {{ subtitle }}</v-card-subtitle>

        <template v-if="description">
            <v-card-actions>
                <v-btn
                    color="secondary"
                    text
                    @click="isDescriptionShowed = !isDescriptionShowed"
                > Details </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="isDescriptionShowed = !isDescriptionShowed"
                >
                    <v-icon>{{ isDescriptionShowed ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="isDescriptionShowed">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{ description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </template>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class CardInfo extends Vue {
    @Prop({ type: String, default: '' }) icon!: string;
    @Prop({ type: String, default: '' }) title!: string;
    @Prop({ type: String, default: '' }) subtitle!: string;
    @Prop({ type: String, default: '' }) description!: string;

    isDescriptionShowed = false;
}
</script>
