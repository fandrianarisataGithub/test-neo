<template>
	<nav class="layout-header navbar navbar-expand-lg bg-transparent">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Fenitra<span class="my-status"></span></a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<ul class="navbar-nav mb-2 mr-100 mb-lg-0 center-ul">
					<li class="nav-item active">
                        <router-link 
                            to="/"
                            class="nav-link" 
    
                            aria-current="page"
                        >
                            Home
                        </router-link>
					</li>
					<li class="nav-item">
						<router-link 
                            to="/blog"
                            class="nav-link" 
                            aria-current="page"
                        >
                            Blog
                        </router-link>
					</li>
                    <li class="nav-item">
						<router-link 
                            to="/admin"
                            class="nav-link" 
                            aria-current="page"
                        >
                            Admin (to do list)
                        </router-link>
					</li>
				</ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
			</div>
		</div>
	</nav>
</template>