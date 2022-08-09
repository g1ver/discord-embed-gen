<script lang="ts">
    import formData from '$lib/FormDataStore';

    async function uploadEmbed() {}
</script>

<div class="generator">
    <label for="author">Author</label>
    <input bind:value={$formData.author} id="author" placeholder="Author" />
    <label for="title">Title</label>
    <input bind:value={$formData.title} id="title" placeholder="Title" />
    <label for="description">Description</label>
    <input
        bind:value={$formData.description}
        id="description"
        placeholder="Description"
    />
    <label for="image-url">Image URL</label>
    <input
        bind:value={$formData.imageUrl}
        id="image-url"
        placeholder="Image URL"
    />
    <label for="redirect-url">Redirect URL</label>
    <input
        bind:value={$formData.redirectUrl}
        id="redirect-url"
        placeholder="Redirect URL"
    />
    <label for="sidebar-color">Sidebar Color</label>
    <input
        bind:value={$formData.sidebarColor}
        id="sidebar-color"
        placeholder="Sidebar Color"
    />
    <button> Create embed </button>
</div>

<style>
    label {
        display: block;
    }
    button {
        display: block;
    }
</style>
