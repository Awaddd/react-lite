// jsx ref: https://michealpearce.dev/custom-jsx-with-vite-typescript/

declare global {
    namespace JSX {
        type IntrinsicElements = Record<
            keyof HTMLElementTagNameMap,
            Record<string, any>
        >;
    }
}

type Component = (props: Record<string, any>) => HTMLElement;

export const jsx = {
    component(
        component: string | Component,
        props: Record<string, any> | null,
        ...children: any[]
    ) {
        if (!props) props = {};
        props.children = children.flat(Infinity);

        if (typeof component === "function") return component(props);

        const element = document.createElement(component);
        for (const [key, value] of Object.entries(props)) {
            if (key === "children") continue;
            else if (key === "className") element.setAttribute("class", value);
            else if (key.startsWith("on")) {
                element.addEventListener(key.slice(2).toLowerCase(), value);
            } else element.setAttribute(key, value);
        }

        element.append(...props.children);

        return element;
    },
};
