<template lang="">
    <div class="page-home base-global-main-section">
        <h1>List of our holidays</h1>
        <div class="holidays-container">
            <template v-for="(holiday, i) in holidays" :key="i">
                <Holiday 
                    :dataHoliday="holiday"
                />
            </template>
        </div>
    </div>
</template>
<script>
import Holiday from './../blocs/Holiday.vue';
export default {
    data(){
        return{
            holidays : []
        }
    },
    components : {
        Holiday
    },
    async mounted(){
        await this.$store.dispatch('getHolidays');
        this.holidays = this.$store.getters.holidays;
        console.log(this.holidays);
    }
}
</script>
<style lang="">
    
</style>
