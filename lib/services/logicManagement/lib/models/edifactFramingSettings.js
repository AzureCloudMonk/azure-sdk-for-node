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
 * The Edifact agreement framing settings.
 *
 */
class EdifactFramingSettings {
  /**
   * Create a EdifactFramingSettings.
   * @member {string} [serviceCodeListDirectoryVersion] The service code list
   * directory version.
   * @member {string} [characterEncoding] The character encoding.
   * @member {number} protocolVersion The protocol version.
   * @member {number} dataElementSeparator The data element separator.
   * @member {number} componentSeparator The component separator.
   * @member {number} segmentTerminator The segment terminator.
   * @member {number} releaseIndicator The release indicator.
   * @member {number} repetitionSeparator The repetition separator.
   * @member {string} characterSet The EDIFACT frame setting characterSet.
   * Possible values include: 'NotSpecified', 'UNOB', 'UNOA', 'UNOC', 'UNOD',
   * 'UNOE', 'UNOF', 'UNOG', 'UNOH', 'UNOI', 'UNOJ', 'UNOK', 'UNOX', 'UNOY',
   * 'KECA'
   * @member {string} decimalPointIndicator The EDIFACT frame setting decimal
   * indicator. Possible values include: 'NotSpecified', 'Comma', 'Decimal'
   * @member {string} segmentTerminatorSuffix The EDIFACT frame setting segment
   * terminator suffix. Possible values include: 'NotSpecified', 'None', 'CR',
   * 'LF', 'CRLF'
   */
  constructor() {
  }

  /**
   * Defines the metadata of EdifactFramingSettings
   *
   * @returns {object} metadata of EdifactFramingSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdifactFramingSettings',
      type: {
        name: 'Composite',
        className: 'EdifactFramingSettings',
        modelProperties: {
          serviceCodeListDirectoryVersion: {
            required: false,
            serializedName: 'serviceCodeListDirectoryVersion',
            type: {
              name: 'String'
            }
          },
          characterEncoding: {
            required: false,
            serializedName: 'characterEncoding',
            type: {
              name: 'String'
            }
          },
          protocolVersion: {
            required: true,
            serializedName: 'protocolVersion',
            type: {
              name: 'Number'
            }
          },
          dataElementSeparator: {
            required: true,
            serializedName: 'dataElementSeparator',
            type: {
              name: 'Number'
            }
          },
          componentSeparator: {
            required: true,
            serializedName: 'componentSeparator',
            type: {
              name: 'Number'
            }
          },
          segmentTerminator: {
            required: true,
            serializedName: 'segmentTerminator',
            type: {
              name: 'Number'
            }
          },
          releaseIndicator: {
            required: true,
            serializedName: 'releaseIndicator',
            type: {
              name: 'Number'
            }
          },
          repetitionSeparator: {
            required: true,
            serializedName: 'repetitionSeparator',
            type: {
              name: 'Number'
            }
          },
          characterSet: {
            required: true,
            serializedName: 'characterSet',
            type: {
              name: 'String'
            }
          },
          decimalPointIndicator: {
            required: true,
            serializedName: 'decimalPointIndicator',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'Comma', 'Decimal' ]
            }
          },
          segmentTerminatorSuffix: {
            required: true,
            serializedName: 'segmentTerminatorSuffix',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'None', 'CR', 'LF', 'CRLF' ]
            }
          }
        }
      }
    };
  }
}

module.exports = EdifactFramingSettings;
