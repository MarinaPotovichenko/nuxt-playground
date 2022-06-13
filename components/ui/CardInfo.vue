<template>
    <v-card outlined>
        <v-card-title v-if="title"> {{ title }} </v-card-title>

        <v-card-subtitle v-if="subtitle"> {{ subtitle }}</v-card-subtitle>

        <template>
            <v-card-actions>
                <v-btn
                    color="secondary"
                    text
                    @click="isDescriptionShowed = !isDescriptionShowed"
                >
                    {{ actionTitle }}
                </v-btn>

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
                        <code
                            v-if="isCode"
                            v-html="description"
                        />

                        <span v-else>
                            {{ description }}
                        </span>
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
    @Prop({ type: String, default: 'Details' }) actionTitle!: string;
    @Prop({ type: Boolean, default: false }) isCode!: boolean;

    isDescriptionShowed = false;
}
</script>

<style lang="scss" scoped>
code {
    white-space: pre-wrap;
}
</style>
