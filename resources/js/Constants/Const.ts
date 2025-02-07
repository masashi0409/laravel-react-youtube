/**
 * ビデオステータスの型
 * @interface
 */
export interface VideoStatus {
  value: number;
  label: string;
  key: string;
}

/**
 * ビデオステータスの型
 * @typedef {Object} VideoStatus
 * @property {number} value - ステータスの値
 * @property {string} label - ステータスのラベル
 * @property {string} key - ステータスのキー
 */

/**
 * ビデオステータスのリスト
 * @type {VideoStatus[]}
 */
export const VIDEO_STATUS = [
  { value: 0, label: '非公開', key: 'PRIVATE' },
  { value: 1, label: '公開', key: 'PUBLIC' }
]
/**
 * 値からビデオステータスを取得する
 * @param {number} value - ステータスの値
 * @returns {VideoStatus | null} 見つかったステータス、ない場合は null
 */
export const videoStatusByValue = (value: number): VideoStatus | null => {
  return VIDEO_STATUS.find((status) => status.value === value) || null
}
/**
 * キーからビデオステータスを取得する
 * @param {string} key - ステータスのキー
 * @returns {VideoStatus | null} 見つかったステータス、ない場合は null
 */
export const videoStatusByKey = (key: string): VideoStatus | null  => {
  return VIDEO_STATUS.find((status) => status.key === key) || null
}