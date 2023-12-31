const template = (variables, { tpl }) => {
  return tpl`
  // This file is generated by svgr. So please don't edit it manually.
  import React, { SVGProps } from 'react';

  ${variables.interfaces};

interface ChildProps {
  onClick?: () => void;
  children?: React.ReactNode;
  fill?: string;
}

  const childrenWithProps = (children: React.ReactNode, callback: (id: string) => void, colors: MapColor): React.ReactNode => React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      const { props: { id, children } } = child;
      const props: ChildProps = {
        children: childrenWithProps(children, callback, colors),
      }
      if (id) {
        props.onClick = () => {
          callback(id);
        };
        props.fill = colors[id] || "#ffff";
      }
      return React.cloneElement(child, props);
    }
    return child;
  });


  interface ComponentProps extends SVGProps<SVGSVGElement> {
    onItemClick: (name: string) => void;
    colors: MapColor;
  }


  const ${variables.componentName} = React.memo((props: ComponentProps) => {
    const { onItemClick, colors } = props;
    return (
      <>{childrenWithProps(${variables.jsx}, onItemClick, colors)}</>
    );
  });

  ${variables.exports}
  `;
};

module.exports = template;
