import commonFields from '../commomFields';
export default {
  name: '',
  titleList: 'Cảnh báo',
  time: 'Thời gian',
  statusGood: 'Tốt',
  statusDamageField: 'Hỏng',
  statusDamageAndRevoked: 'Đã thu hồi',
  statusDamageSentMaintain: 'Đang bảo hành',
  expired: 'Hết hạn',
  nearExpired: 'Sắp hết hạn',
  inValid: 'Tốt',
  byMaterialStatus: 'Tình trạng vật tư',
  byMaterialAge: 'Thời hạn  sử dụng',
  sumTotalbudget: 'Tổng số đồng hồ: %{val} (ĐH)',
  sumTotalauto-matcher: 'Tổng số cảm biến: %{val} (CB)',
  sumTotalDataload: 'Tổng số thiết bị ghi phát:  %{val} (DL)',
  sumTotalload: 'Tổng số máy bơm:  %{val} (MB)',
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
    description: 'Mô tả',
    selectType: 'Thống kê theo',
    selectCondition: 'Điều kiện lọc',
    selectGroup: 'Chọn nhóm nguồn',
    selectSource: 'Chọn nguồn nước',
    bworksSource: 'Nguồn nước',
    materialStatus: 'Tình trạng',
    auto-matcher: 'Cảm biến',
    budget: 'Đồng hồ',
    load: 'Máy bơm',
    dataload: 'Thiết bị thu phát',
    totalDevice: 'Số lượng',
    selectMaterial: 'Chọn vật tư',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};
