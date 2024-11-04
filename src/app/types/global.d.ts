// declare module '*.scss' {
//     interface IClassNames {
//         [className: string]: string
//     }
//     export const classNames: IClassNames;
// }

declare module '*.scss';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff2';

declare module '*.svg' {
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
