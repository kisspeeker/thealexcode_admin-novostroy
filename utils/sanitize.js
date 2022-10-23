const sanitizeAttributes = (data = {}, customFieldsToHide) => {
  const fieldsToHide = customFieldsToHide ?? ['createdAt', 'updatedAt', 'publishedAt'];

  return Object.keys(data).filter((attr) => !fieldsToHide.includes(attr)).reduce((obj, key) => {
    return {
      ...obj,
      [key]: data[key]
    };
  }, {});
}

const sanitizeArray = (data = [], isShowId = true, customFieldsToHide) => {
  const arr = Array.isArray(data) ? data : [];

  return arr.map((item) => {
    const res = {
      ...sanitizeAttributes(item.attributes, customFieldsToHide)
    }
    if (isShowId) {
      res.id = item.id;
    }
    return res
  })
}

const sanitizeObject = (data = {}, isShowId = true, customFieldsToHide) => {
  const res = {
    ...sanitizeAttributes(data.attributes, customFieldsToHide)
  }
  if (isShowId) {
    res.id = data.id;
  }
  return res
}

module.exports = {
  sanitizeAttributes,
  sanitizeArray,
  sanitizeObject
}