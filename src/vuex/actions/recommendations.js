import recommendations from '../../api/recommendations'

import * as types from '../mutation-types'

export const getAllRecommendations = ({ dispatch }) => {
  recommendations.getAll().then(res => {
    dispatch(types.RECEIVE_RECOMMENDATIONS, res.data)
  })
}
