export const types = { COMMON: { SYNCNEWS: "common/SYNC_NEWS" } };

export const syncNews = news => ({
  type: types.COMMON.SYNCNEWS,
  news
});
