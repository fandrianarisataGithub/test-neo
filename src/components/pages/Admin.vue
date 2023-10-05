<template>
	<div class="page-admin base-global-main-section">
		<h1 class="mb-4">Todo List avec Vue 3 et Bootstrap</h1>
		<button class="btn btn-success mb-3" @click="openAddModal">
			Ajouter une tâche
		</button>

		<!-- Modal d'ajout/édition -->
		<div
			class="my-modal"
			ref="taskModal"
			tabindex="-1"
			aria-labelledby="taskModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="taskModalLabel">
							{{ modalTitle }}
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="saveTask">
							<div class="mb-3">
								<label for="title" class="form-label"
									>Titre</label
								>
								<input
									type="text"
									class="form-control"
									id="title"
									v-model="task.title"
									required
								/>
							</div>
							<div class="mb-3">
								<label for="slug" class="form-label"
									>Slug</label
								>
								<input
									type="text"
									class="form-control"
									id="slug"
									v-model="task.slug"
									required
								/>
							</div>
							<div class="mb-3">
								<label for="content" class="form-label"
									>Contenu</label
								>
								<textarea
									class="form-control"
									id="content"
									v-model="task.content"
									required
								></textarea>
							</div>
							<div class="mb-3">
								<label for="date" class="form-label"
									>Date</label
								>
								<input
									type="date"
									class="form-control"
									id="date"
									v-model="task.date"
									required
								/>
							</div>
							<button type="submit" class="btn btn-primary">
								{{ modalAction }}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>

		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>ID</th>
					<th>Titre</th>
					<th>Slug</th>
					<th>Contenu</th>
					<th>Date</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="task in tasks" :key="task.id">
					<td>{{ task.id }}</td>
					<td>{{ task.title }}</td>
					<td>{{ task.slug }}</td>
					<td>{{ task.content }}</td>
					<td>{{ task.date }}</td>
					<td>
						<button
							class="btn btn-primary btn-sm"
							@click="editTask(task.id)"
						>
							Edit
						</button>
						<button
							class="btn btn-info btn-sm"
							@click="showTask(task.id)"
						>
							Show
						</button>
						<button
							class="btn btn-danger btn-sm"
							@click="deleteTask(task.id)"
						>
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	data() {
		return {
			tasks: [
				{
					id: "1",
					title: "Titre 1",
					slug: "slug1",
					content: "Lorem ipsum...",
					date: "2023-09-12",
				},
			],
			task: {
				id: "",
				title: "",
				slug: "",
				content: "",
				date: "",
			},
			modalTitle: "",
			modalAction: "Insert",
            isShowModal: false
		};
	},
   
	methods: {
		editTask(id) {
			console.log(`Édition de la tâche avec l'ID ${id}`);
		},
		showTask(id) {
			console.log(`Affichage de la tâche avec l'ID ${id}`);
		},
		deleteTask(id) {
			console.log(`Suppression de la tâche avec l'ID ${id}`);
			const index = this.tasks.findIndex((task) => task.id === id);
			if (index !== -1) {
				this.tasks.splice(index, 1);
			}
		},
		addTask() {
			const newTask = {
				id: String(this.tasks.length + 1),
				title: "Nouvelle Tâche",
				slug: "slug" + (this.tasks.length + 1),
				content: "Nouveau contenu...",
				date: "2023-09-13",
			};
			this.tasks.push(newTask);
		},
		openAddModal() {
			this.modalTitle = "Ajouter une tâche";
			this.modalAction = "Ajouter";
			this.task = {
				id: String(this.tasks.length + 1),
				title: "",
				slug: "",
				content: "",
				date: "",
			};
            //console.log(this.$refs.taskModal)
		},
		openEditModal(id) {
			const taskToEdit = this.tasks.find((task) => task.id === id);
			if (taskToEdit) {
				this.modalTitle = "Éditer la tâche";
				this.modalAction = "Éditer";
				this.task = { ...taskToEdit };
				
			}
		},
		saveTask() {
			if (this.modalAction === "Ajouter") {
				this.tasks.push(this.task);
			} else if (this.modalAction === "Éditer") {
				const index = this.tasks.findIndex(
					(task) => task.id === this.task.id
				);
				if (index !== -1) {
					this.tasks[index] = { ...this.task };
				}
			}
		},
	},
};
</script>
