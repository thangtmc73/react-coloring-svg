const template = (variables, { tpl }) => {
  return tpl`
  // This file is generated by svgr. So please don't edit it manually.
  import React, { SVGProps } from 'react';

  ${variables.interfaces};

  const childrenWithProps = (children: string | JSX.Element | JSX.Element[], callback: (id: string) => void): (string | JSX.Element)[] => React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      if (child.props.id) {
        return React.cloneElement(child, { onClick: () => { callback(child.props.id); }, children: childrenWithProps(child.props.children, callback) });
      }
      return React.cloneElement(child, { children: childrenWithProps(child.props.children, callback) });
    }
    return child;
  });


  interface ComponentProps extends SVGProps<SVGSVGElement> {
    onItemClick: (name: string) => void;
    colors: MapColor;
  }


  const ${variables.componentName} = React.memo((props: ComponentProps) => {
    const { onItemClick } = props;
    return (
      <>{childrenWithProps(${variables.jsx}, onItemClick)}</>
    );
  });

  ${variables.exports}
  `;
};

module.exports = template;