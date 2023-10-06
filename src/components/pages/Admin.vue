<template lang="">
	<div class="page-admin base-global-main-section">
		<h1>Admin list of holidays</h1>
		<div class="table-container">
			<button class="btn btn-primary btn-sm mb-3" data-bs-target="#modal_demo" data-bs-toggle="modal">Add holiday</button>
            <div class="total mb-3">Total : {{ $store.getters.total }}</div>
			<table class="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Localname</th>
						<th>Type</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(h, i) in holidays" :key="i">
						<td>{{ h.name }}</td>
						<td>{{ h.localName }}</td>
						<td>{{ h.type }}</td>
						<td>{{ h.date }}</td>
						<td>
							<button class="btn btn-sm btn-warning">Edit</button>
							<button class="btn btn-sm btn-danger">
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
            <div ref="modal_demo" class="modal" id="modal_demo">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add holiday</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <div class="form-group">
                                    <label for="">Name</label>
                                    <input v-model="holiday.name" type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="">Local name</label>
                                    <input v-model="holiday.localName"  type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="">Type</label>
                                    <select v-model="holiday.type"  class="form-control">
                                        <option value="Public">Public</option>
                                        <option value="Optional">Optional</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">Date</label>
                                    <input v-model="holiday.date"  type="date" class="form-control">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button ref="btnCloseModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button @click="addHoliday" type="button" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>
<script>
import 'bootstrap'
export default {
	data() {
		return {
			holidays: [],
            modal_demo : null,
            holiday : {
                name : '',
                localName : '',
                type : null,
                date : null
            }
		};
	},
	components: {},
	async mounted() {
        //this.modal_demo = new bootstrap.Modal('#modal_demo', {})
		await this.$store.dispatch("getHolidays");
		this.holidays = this.$store.getters.holidays;
		console.log(this.holidays);
	},
    methods:{
        addHoliday(){
		    this.holidays.push(this.holiday); 
            // on n'a pas de bdd donc je l'insert dans le store
            // mais les données via le api n'est pas modifiées
            this.$store.dispatch('setHolidaysAfterAdding', []); 
            //close modal 
            this.$refs.btnCloseModal.click();
        }
    }
};
</script>
<style lang=""></style>
