export interface AuthGetRequest {
  email: string
  password: string
}

export interface AuthGetResponse {
  token: string
}

// export interface EventsGetRequest {}

export interface EventsGetResponse {
  createdAt: number
  address: string
  endDate: string
  scope: 'public' | 'private' | 'hidden'
  imageUrl: string
  description: string
  id: string
  title: string
  userId: string
  startDate: string
}

export interface EventPostRequest {
  address: string
  endDate: number
  scope: 'public' | 'private' | 'hidden'
  description: string
  imageDataURI?: string
  title: string
  startDate: number
}

export interface EventPostResponse {
  message: string
}

// export interface EventGetRequest {}

export interface EventGetResponse {
  createAt: number
  address: string
  endDate: number
  scope: 'public' | 'private' | 'hidden'
  imageUrl: string
  description: string
  id: string
  title: string
  userId: string
  startDate: number
}

export interface EventPutRequest {
  address: string
  endDate: number
  scope: 'public' | 'private' | 'hidden'
  description: string
  imageDataURI?: string
  title: string
  startDate: number
}

export interface EventPutResponse {
  message: string
}

// export interface EventDeleteRequest {}

export interface EventDeleteResponse {
  message: string
}

// export interface ItemsGetRequest {}

export interface ItemsGetResponse {
  eventId: string
  createdAt: number
  latitude: string
  longitude: string
  scope: 'public' | 'private' | 'hidden'
  description: string
  id: string
  title: string
  radius: number
  userId: string
}

export interface ItemPostRequest {
  file: {
    fileName: string
    dataURI: string
    type: string
  }
  latitude: string
  longitude: string
  scope: 'public' | 'private' | 'hidden'
  description: string
  title: string
  radius: number
}

export interface ItemPostResponse {
  message: string
}

// export interface ItemGetRequest {}

export interface ItemGetResponse {
  eventId: string
  createdAt: number
  coordinate: {
    latitude: string
    longitude: string
  }
  file: {
    dataURI: string
    type: string
  }
  scope: 'public' | 'private' | 'hidden'
  description: string
  id: string
  title: string
  radius: number
  userId: string
}

export interface ItemPutRequest {
  coodinate: {
    latitude: string
    longitude: string
  }
  scope: 'public' | 'private' | 'hidden'
  description: string
  title: string
  radius: number
}

export interface ItemPutResponse {
  message: string
}

// export interface ItemDeleteRequest {}

export interface ItemDeleteResponse {
  message: string
}

// export interface LogDownloadGetRequest {}

export interface LogDownloadGetResponse {
  itemId: string
  eventId: string
  createdAt: string
  ip: string
  userAgent: string
  id: string
}

// export interface UserGetRequest {}

export interface UserGetResponse {
  createdAt: number
  name: string
  description: string
  iconUrl: string
  id: string
  email: string
}

export interface UserPostRequest {
  password: string
  iconDataURI: string
  name: string
  description: string
  email: string
}

export interface UserPostResponse {
  token: string
}

export interface UserPutRequest {
  password: string
  iconDataURI: string
  name: string
  description: string
  email: string
}

export interface UserPutResponse {
  message: string
}

export interface UserDeleteRequest {
  password: string
}

export interface UserDeleteResponse {
  message: string
}

export interface errorResponse {
  message: string
}
