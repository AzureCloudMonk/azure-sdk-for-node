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
 * Information on the connectivity status.
 *
 */
class ConnectivityInformation {
  /**
   * Create a ConnectivityInformation.
   * @member {array} [hops] List of hops between the source and the
   * destination.
   * @member {string} [connectionStatus] The connection status. Possible values
   * include: 'Unknown', 'Connected', 'Disconnected', 'Degraded'
   * @member {number} [avgLatencyInMs] Average latency in milliseconds.
   * @member {number} [minLatencyInMs] Minimum latency in milliseconds.
   * @member {number} [maxLatencyInMs] Maximum latency in milliseconds.
   * @member {number} [probesSent] Total number of probes sent.
   * @member {number} [probesFailed] Number of failed probes.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectivityInformation
   *
   * @returns {object} metadata of ConnectivityInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectivityInformation',
      type: {
        name: 'Composite',
        className: 'ConnectivityInformation',
        modelProperties: {
          hops: {
            required: false,
            readOnly: true,
            serializedName: 'hops',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConnectivityHopElementType',
                  type: {
                    name: 'Composite',
                    className: 'ConnectivityHop'
                  }
              }
            }
          },
          connectionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'connectionStatus',
            type: {
              name: 'String'
            }
          },
          avgLatencyInMs: {
            required: false,
            readOnly: true,
            serializedName: 'avgLatencyInMs',
            type: {
              name: 'Number'
            }
          },
          minLatencyInMs: {
            required: false,
            readOnly: true,
            serializedName: 'minLatencyInMs',
            type: {
              name: 'Number'
            }
          },
          maxLatencyInMs: {
            required: false,
            readOnly: true,
            serializedName: 'maxLatencyInMs',
            type: {
              name: 'Number'
            }
          },
          probesSent: {
            required: false,
            readOnly: true,
            serializedName: 'probesSent',
            type: {
              name: 'Number'
            }
          },
          probesFailed: {
            required: false,
            readOnly: true,
            serializedName: 'probesFailed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectivityInformation;
