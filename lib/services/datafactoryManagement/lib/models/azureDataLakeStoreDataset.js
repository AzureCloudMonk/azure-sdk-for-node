/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Azure Data Lake Store dataset.
 *
 * @extends models['Dataset']
 */
class AzureDataLakeStoreDataset extends models['Dataset'] {
  /**
   * Create a AzureDataLakeStoreDataset.
   * @member {object} [folderPath] Path to the folder in the Azure Data Lake
   * Store. Type: string (or Expression with resultType string).
   * @member {object} [fileName] The name of the file in the Azure Data Lake
   * Store. Type: string (or Expression with resultType string).
   * @member {object} [format] The format of the Data Lake Store.
   * @member {object} [format.serializer] Serializer. Type: string (or
   * Expression with resultType string).
   * @member {object} [format.deserializer] Deserializer. Type: string (or
   * Expression with resultType string).
   * @member {string} [format.type] Polymorphic Discriminator
   * @member {object} [wildcardPath] The whole path include file name in the
   * Azure Data Lake Store with wildcard supported. Type: string (or Expression
   * with resultType string).
   * @member {object} [compression] The data compression method used for the
   * item(s) in the Azure Data Lake Store.
   * @member {string} [compression.type] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureDataLakeStoreDataset
   *
   * @returns {object} metadata of AzureDataLakeStoreDataset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureDataLakeStoreFile',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Dataset',
        className: 'AzureDataLakeStoreDataset',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          structure: {
            required: false,
            serializedName: 'structure',
            type: {
              name: 'Object'
            }
          },
          linkedServiceName: {
            required: true,
            serializedName: 'linkedServiceName',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          folder: {
            required: false,
            serializedName: 'folder',
            type: {
              name: 'Composite',
              className: 'DatasetFolder'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          folderPath: {
            required: false,
            serializedName: 'typeProperties.folderPath',
            type: {
              name: 'Object'
            }
          },
          fileName: {
            required: false,
            serializedName: 'typeProperties.fileName',
            type: {
              name: 'Object'
            }
          },
          format: {
            required: false,
            serializedName: 'typeProperties.format',
            type: {
              name: 'Composite',
              additionalProperties: {
                type: {
                  name: 'Dictionary',
                  value: {
                      required: false,
                      serializedName: 'ObjectElementType',
                      type: {
                        name: 'Object'
                      }
                  }
                }
              },
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'DatasetStorageFormat',
              className: 'DatasetStorageFormat'
            }
          },
          wildcardPath: {
            required: false,
            serializedName: 'typeProperties.wildcardPath',
            type: {
              name: 'Object'
            }
          },
          compression: {
            required: false,
            serializedName: 'typeProperties.compression',
            type: {
              name: 'Composite',
              additionalProperties: {
                type: {
                  name: 'Dictionary',
                  value: {
                      required: false,
                      serializedName: 'ObjectElementType',
                      type: {
                        name: 'Object'
                      }
                  }
                }
              },
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'DatasetCompression',
              className: 'DatasetCompression'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureDataLakeStoreDataset;
