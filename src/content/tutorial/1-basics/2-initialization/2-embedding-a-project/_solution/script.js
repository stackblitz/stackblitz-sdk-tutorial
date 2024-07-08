import sdk from '@stackblitz/sdk';

const rootElementId = 'root';
const options = {
    crossOriginIsolated: true,
    height: 'auto',
};

sdk.embedProjectId(rootElementId, 'react-data-table-component', options);