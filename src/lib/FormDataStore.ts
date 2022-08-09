import { writable } from 'svelte/store';

const formData = writable({
    author: '',
    title: '',
    description: '',
    imageUrl: '',
    redirectUrl: '',
    sidebarColor: '',
});

export default formData;
