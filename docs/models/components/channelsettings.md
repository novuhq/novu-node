# ChannelSettings


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | Id of the integration that is used for this channel                            |
| `credentials`                                                                  | [components.ChannelCredentials](../../models/components/channelcredentials.md) | :heavy_check_mark:                                                             | Credentials payload for the specified provider                                 |
| `integrationIdentifier`                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The integration identifier                                                     |
| `providerId`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | The provider identifier for the credentials                                    |