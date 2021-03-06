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
 * Class representing a ImageTagCreateSummary.
 */
class ImageTagCreateSummary {
  /**
   * Create a ImageTagCreateSummary.
   * @member {array} [created]
   * @member {array} [duplicated]
   * @member {array} [exceeded]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageTagCreateSummary
   *
   * @returns {object} metadata of ImageTagCreateSummary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageTagCreateSummary',
      type: {
        name: 'Composite',
        className: 'ImageTagCreateSummary',
        modelProperties: {
          created: {
            required: false,
            serializedName: 'created',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageTagCreateEntryElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageTagCreateEntry'
                  }
              }
            }
          },
          duplicated: {
            required: false,
            serializedName: 'duplicated',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageTagCreateEntryElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageTagCreateEntry'
                  }
              }
            }
          },
          exceeded: {
            required: false,
            serializedName: 'exceeded',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageTagCreateEntryElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageTagCreateEntry'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ImageTagCreateSummary;
