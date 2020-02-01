import * as React from 'react';

interface ComposeContextsProps {
  components: [React.JSXElementConstructor<React.PropsWithChildren<any>>, any][];
  children: React.ReactNode;
}

export const ComposeContexts = (props: ComposeContextsProps) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc: any, [Comp, value]) => {
        return <Comp value={value}>{acc}</Comp>;
      }, children)}
    </>
  );
};
