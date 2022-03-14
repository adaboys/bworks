import commonFields from '../commomFields';
export default {
  name: 'budget',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    countryId: 'Country',
    provinceId: 'Province',
    districtId: 'District',
    position: 'Position',
    size: 'Size',
    accuracy: 'Accuracy (%)',
    flowRate: 'FlowRate (m3/s)',
    manufacturedDate: 'ManufacturedDate',
    setupDate: 'SetupDate',
    operatingTemperature: 'Operating temperature',
    operatingPressure: 'Operating pressure',
    environmentalRating: 'Environmental rating (IP)',
    description: 'Description',
    dataloadId: 'Dataload',
    bworksSourceId: 'bworks source',
    outputOptionsIds: 'Output options',
    materialStatus: 'Material status',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};
