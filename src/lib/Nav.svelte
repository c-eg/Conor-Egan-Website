<script>
	import { page } from '$app/stores';

	let path = $derived($page.url.pathname);
</script>

<nav>
	<input id="nav_menu_toggle" type="checkbox" />
	<label class="menu_icon text-[var(--colour-primary)]" for="nav_menu_toggle"> &#9776; </label>
	<ul>
		<li>
			<a class={path === '/' ? 'active' : ''} href="/">Home</a>
		</li>
		<li>
			<a class={path === '/projects' ? 'active' : ''} href="/projects">Projects</a>
		</li>
	</ul>
</nav>

<style lang="postcss">
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav > ul > li > a {
        font-size: 32px;
        font-weight: 500;
        color: var(--colour-primary);
    }

    nav > ul > li > a.active {
        color: var(--colour-secondary);
    }

    nav > ul > li > a:hover {
        text-decoration: underline;
        text-decoration-color: var(--colour-secondary);
    }

    @media (max-width: 639px) {
        nav {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
        }

        .menu_icon {
            font-size: 30px;
            cursor: pointer;
            display: block;
        }

        nav > ul > li > a {
            font-size: 24px;
        }

        input[type='checkbox'] {
            display: none;
        }

        nav > ul {
            display: none;
            flex-direction: column;
            border-radius: 5%;
            width: 60%;
            gap: 10px;
        }

        input[type='checkbox']:checked ~ .menu_icon {
            transform: rotate(180deg);
            transition: all 0.25s ease-in-out;
        }

        input[type='checkbox'] ~ .menu_icon {
            transform: rotate(0deg);
            transition: all 0.25s ease-in-out;
        }

        input[type='checkbox']:checked ~ ul {
            display: flex;
        }
    }

    @media (min-width: 640px) {
        .menu_icon,
        input[type='checkbox'] {
            display: none;
        }

        nav > ul {
            display: flex;
            gap: 2.5rem;
        }
    }
</style>
