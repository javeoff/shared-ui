declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  /**
   * Реакт компонент, созданный из svg.
   */
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const defaultValue: string;

  /**
   * Svg в виде base64 строки.
   */
  export default defaultValue;
}
