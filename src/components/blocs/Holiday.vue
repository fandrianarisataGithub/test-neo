<template lang="">
    <div class="bloc-holiday">
        <div class="name"><b>Name : </b> {{ dataHoliday && dataHoliday.name }}</div>
        <div class="localname"><b>Local name : </b> {{ dataHoliday && dataHoliday.localName }}</div>
        <div class="type"><b>type :</b> {{ dataHoliday && dataHoliday.type }}</div>
        <div class="date"><b>date : </b> {{ dataHoliday && dataHoliday.date }}</div>
    </div>
</template>
<script>
export default {
    props : ['dataHoliday']
}
</script>
<style lang="">
    
</style>