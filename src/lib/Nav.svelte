<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;
</script>

<nav>
    <ul>
        <li class="flex justify-center items-center gap-10">
            <a href="/" class={path === '/' ? 'active' : ''}>Home</a>
            <a href="/projects" class={path === '/projects' ? 'active' : ''}>Projects</a>
        </li>
    </ul>
</nav>

<style lang="postcss">
a {
    font-size: 32px;
    font-weight: 500;
    color: var(--colour-primary);
}

a.active {
    color: var(--colour-secondary);
}

a:hover {
    text-decoration: underline;
    text-decoration-color: var(--colour-secondary);
}
</style>