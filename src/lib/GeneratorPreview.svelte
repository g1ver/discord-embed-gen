<script lang="ts">
    import formData from "$lib/FormDataStore";
</script>

<div class="preview">
    <h4 class="author">{$formData.author}</h4>
    <h4 class="title">{$formData.title}</h4>
    <h4 class="description">{$formData.description}</h4>
    <h4 class="image-url">{$formData.imageUrl}</h4>
    <h4 class="redirect-url">{$formData.redirectUrl}</h4>
    <h4 class="sidebar-color">{$formData.sidebarColor}</h4>
</div>

<style>
    .preview {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>