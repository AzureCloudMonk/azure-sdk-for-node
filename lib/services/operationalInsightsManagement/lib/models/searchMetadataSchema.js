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
 * Schema metadata for search.
 *
 */
class SearchMetadataSchema {
  /**
   * Create a SearchMetadataSchema.
   * @member {string} [name] The name of the metadata schema.
   * @member {number} [version] The version of the metadata schema.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SearchMetadataSchema
   *
   * @returns {object} metadata of SearchMetadataSchema
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SearchMetadataSchema',
      type: {
        name: 'Composite',
        className: 'SearchMetadataSchema',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SearchMetadataSchema;