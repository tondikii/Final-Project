import { gql } from "@apollo/client";

export const GET_USER = gql`
query GetUsers($accessToken: String) {
  getUserProfile(access_token: $accessToken) {
    UserProfile {
      id
      UserId
      User {
        email
        fullName
        id
      }
    }
  }
}
`;

export const GET_COACHES = gql`
  query GetCoaches {
    getCoaches {
      id
      name
      imgCoach
      age
      bio
    }
  }
`;

export const GET_COACH_DETAIL = gql`
  query GetCoachDetail($getCoachDetailId: ID) {
    getCoachDetail(id: $getCoachDetailId) {
      id
      name
      imgCoach
      age
      bio
    }
  }
`;

export const GET_LEVEL = gql`
  query GetLevels {
    getLevel {
      id
      name
      thumbnail
    }
  }
`;

export const GET_CONTENT_CARD = gql`
  query Query($accessToken: String) {
    getContents(access_token: $accessToken) {
      id
      likes
      title
      imgThumbnail
      LevelId
    }
  }
`;

export const GET_USER_LOGS = gql`
  query GetUserLogs($accessToken: String) {
    getUserLogs(access_token: $accessToken) {
      id
      height
      weight
      activityLevel
      LevelId
      UserId
      createdAt
    }
  }
`
export const GET_CONTENT_DETAIL = gql`
  query GetContentById($accessToken: String, $contentId: ID) {
    getContentById(access_token: $accessToken, ContentId: $contentId) {
      id
      youtubeUrl
      description
      likes
      title
      imgThumbnail
      statusLike
    }
  }
`;
