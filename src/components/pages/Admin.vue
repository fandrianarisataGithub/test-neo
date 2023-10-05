<template>
	<div class="page-admin base-global-main-section">
		<h1 class="mb-4">Todo List avec Vue 3 et Bootstrap</h1>
		<button class="btn btn-success mb-3" @click="addTask">
			Ajouter une tâche
		</button>
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
	},
};
</script>
