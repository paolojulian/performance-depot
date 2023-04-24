import { ENVIROMENTS } from '@/utils/config';
import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: ENVIROMENTS.spaceID,
  accessToken: ENVIROMENTS.deliveryToken
})

export default contentfulClient