import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="150"
      width="150"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="vortex-wrapper"
      colors={[
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
      ]}
    />
  );
};
