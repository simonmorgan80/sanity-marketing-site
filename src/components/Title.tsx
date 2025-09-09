import { PropsWithChildren } from 'react';

export function Title(props: PropsWithChildren) {
    return (
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold ">
            {props.children}
        </h1>
    );
}
