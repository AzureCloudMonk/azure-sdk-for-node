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
 * Definition of Analysis
 *
 * @extends models['ProxyOnlyResource']
 */
class AnalysisDefinition extends models['ProxyOnlyResource'] {
  /**
   * Create a AnalysisDefinition.
   * @member {string} [description] Description of the Analysis
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AnalysisDefinition
   *
   * @returns {object} metadata of AnalysisDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AnalysisDefinition',
      type: {
        name: 'Composite',
        className: 'AnalysisDefinition',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AnalysisDefinition;