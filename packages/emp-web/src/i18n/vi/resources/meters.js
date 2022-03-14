import commonFields from '../commomFields';
export default {
  name: '',
  fields: {
    name: 'Tên',
    prefix: 'Tiền tố',
    fullName: 'Tên đầy đủ',
    code: 'Mã',
    population: 'Dân số',
    countryId: 'Quốc gia',
    provinceId: 'Tỉnh / Thành phố',
    districtId: 'Quận / Huyện',
    position: 'Vị trí trung tâm',
    size: 'Cấp DN',
    accuracy: 'Độ chính xác (%)',
    flowRate: 'Tốc độ dòng tối đa (m3/s)',
    manufacturedDate: 'Ngày sản xuất',
    setupDate: 'Ngày lắp đặt',
    operatingTemperature: 'Nhiệt độ môi trường tối đa',
    operatingPressure: 'Áp suất môi trường tối đa',
    environmentalRating: 'Cấp bảo vệ IP',
    description: 'Mô tả',
    dataloadId: 'Thiết bị ghi/phát (data load)',
    bworksSourceId: 'Dùng cho nguồn nước',
    outputOptionsIds: 'Giao tiếp đầu ra',
    materialStatus: 'Tình trạng',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};
