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

/**
 * Class representing a PredictionQueryTag.
 */
class PredictionQueryTag {
  /**
   * Create a PredictionQueryTag.
   * @member {uuid} [id]
   * @member {number} [minThreshold]
   * @member {number} [maxThreshold]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PredictionQueryTag
   *
   * @returns {object} metadata of PredictionQueryTag
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PredictionQueryTag',
      type: {
        name: 'Composite',
        className: 'PredictionQueryTag',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          minThreshold: {
            required: false,
            readOnly: true,
            serializedName: 'minThreshold',
            type: {
              name: 'Number'
            }
          },
          maxThreshold: {
            required: false,
            readOnly: true,
            serializedName: 'maxThreshold',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = PredictionQueryTag;