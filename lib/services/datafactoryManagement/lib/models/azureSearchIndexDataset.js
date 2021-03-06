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
 * The Azure Search Index.
 *
 * @extends models['Dataset']
 */
class AzureSearchIndexDataset extends models['Dataset'] {
  /**
   * Create a AzureSearchIndexDataset.
   * @member {object} indexName The name of the Azure Search Index. Type:
   * string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureSearchIndexDataset
   *
   * @returns {object} metadata of AzureSearchIndexDataset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureSearchIndex',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Dataset',
        className: 'AzureSearchIndexDataset',
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
          indexName: {
            required: true,
            serializedName: 'typeProperties.indexName',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureSearchIndexDataset;
