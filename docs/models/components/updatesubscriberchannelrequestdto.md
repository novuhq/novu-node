# UpdateSubscriberChannelRequestDto


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `credentials`                                                                  | [components.ChannelCredentials](../../models/components/channelcredentials.md) | :heavy_check_mark:                                                             | Credentials payload for the specified provider                                 |
| `integrationIdentifier`                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The integration identifier                                                     |
| `providerId`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | The provider identifier for the credentials                                    |