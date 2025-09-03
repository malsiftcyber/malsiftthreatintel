# Cyber Threat Intelligence Platform API Documentation

## Overview

The Cyber Threat Intelligence Platform provides a comprehensive REST API for managing and accessing threat intelligence data. The API is built with FastAPI and provides automatic OpenAPI documentation.

## Base URL

- Development: `http://localhost:8000`
- Production: `https://your-domain.com`

## Authentication

Currently, the API uses simple API key authentication. Include your API key in the request headers:

```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Health Check

#### GET /health

Check the health status of the API.

**Response:**
```json
{
  "status": "healthy",
  "service": "cyber-threat-intel"
}
```

### Indicators

#### GET /api/v1/indicators

Retrieve threat indicators with filtering and pagination.

**Query Parameters:**
- `skip` (integer): Number of records to skip (default: 0)
- `limit` (integer): Number of records to return (default: 100, max: 1000)
- `indicator_type` (string): Filter by indicator type (ip, domain, url, hash, email, cve)
- `threat_level` (string): Filter by threat level (low, medium, high, critical)
- `source_id` (integer): Filter by source ID
- `tags` (array): Filter by tags
- `search` (string): Search in value and description

**Response:**
```json
{
  "items": [
    {
      "id": 1,
      "indicator_type": "ip",
      "value": "192.168.1.1",
      "normalized_value": "192.168.1.1",
      "confidence_score": 0.8,
      "threat_level": "high",
      "tags": ["malware", "botnet"],
      "description": "Malicious IP address",
      "first_seen": "2023-01-01T00:00:00Z",
      "last_seen": "2023-01-15T00:00:00Z",
      "source_id": 1,
      "external_id": "ext123",
      "metadata": {},
      "is_active": true,
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-15T00:00:00Z"
    }
  ],
  "total": 100,
  "page": 1,
  "size": 100,
  "pages": 1
}
```

#### GET /api/v1/indicators/{indicator_id}

Retrieve a specific threat indicator by ID.

#### POST /api/v1/indicators

Create a new threat indicator.

**Request Body:**
```json
{
  "indicator_type": "ip",
  "value": "192.168.1.1",
  "confidence_score": 0.8,
  "threat_level": "high",
  "tags": ["malware"],
  "description": "Malicious IP address",
  "source_id": 1,
  "external_id": "ext123",
  "metadata": {}
}
```

#### PUT /api/v1/indicators/{indicator_id}

Update a threat indicator.

#### DELETE /api/v1/indicators/{indicator_id}

Delete a threat indicator.

#### GET /api/v1/indicators/summary/stats

Get summary statistics of threat indicators.

**Response:**
```json
{
  "total_indicators": 1000,
  "indicators_by_type": {
    "ip": 400,
    "domain": 300,
    "url": 200,
    "hash": 100
  },
  "indicators_by_level": {
    "low": 200,
    "medium": 400,
    "high": 300,
    "critical": 100
  },
  "active_sources": 5,
  "last_update": "2023-01-15T00:00:00Z"
}
```

#### POST /api/v1/indicators/deduplicate

Perform deduplication of all indicators.

**Response:**
```json
{
  "original_count": 1000,
  "deduplicated_count": 950,
  "duplicates_found": 50,
  "processing_time": 2.5
}
```

### Sources

#### GET /api/v1/sources

Retrieve threat intelligence sources.

**Query Parameters:**
- `active_only` (boolean): Only return active sources (default: true)

#### GET /api/v1/sources/{source_id}

Retrieve a specific source by ID.

#### POST /api/v1/sources

Create a new threat source.

**Request Body:**
```json
{
  "name": "CISA",
  "description": "Cybersecurity & Infrastructure Security Agency",
  "url": "https://www.cisa.gov",
  "source_type": "government",
  "rate_limit_per_minute": 10,
  "rate_limit_per_hour": 1000,
  "api_key": "optional-api-key"
}
```

#### PUT /api/v1/sources/{source_id}

Update a threat source.

#### DELETE /api/v1/sources/{source_id}

Delete a threat source.

### Feeds

#### GET /api/v1/feeds

Retrieve feed configurations.

#### GET /api/v1/feeds/{config_id}

Retrieve a specific feed configuration.

#### POST /api/v1/feeds

Create a new feed configuration.

**Request Body:**
```json
{
  "source_name": "CISA",
  "is_enabled": true,
  "base_url": "https://www.cisa.gov/api",
  "endpoints": {
    "vulnerabilities": "/vulnerabilities"
  },
  "rate_limits": {
    "per_minute": 10,
    "per_hour": 1000
  },
  "headers": {
    "User-Agent": "CyberThreatIntel/1.0"
  },
  "parameters": {},
  "api_key": "optional-api-key"
}
```

#### PUT /api/v1/feeds/{config_id}

Update a feed configuration.

#### DELETE /api/v1/feeds/{config_id}

Delete a feed configuration.

#### POST /api/v1/feeds/{config_id}/fetch

Fetch data from a specific feed.

**Response:**
```json
{
  "id": 1,
  "source_name": "CISA",
  "status": "pending",
  "started_at": null,
  "completed_at": null,
  "indicators_found": 0,
  "indicators_new": 0,
  "error_message": null,
  "created_at": "2023-01-15T00:00:00Z"
}
```

#### POST /api/v1/feeds/fetch-all

Fetch data from all enabled feeds.

#### GET /api/v1/feeds/jobs

Retrieve recent fetch jobs.

#### GET /api/v1/feeds/jobs/{job_id}

Retrieve a specific fetch job.

### Campaigns

#### GET /api/v1/campaigns

Retrieve threat campaigns.

**Query Parameters:**
- `active_only` (boolean): Only return active campaigns (default: true)

#### GET /api/v1/campaigns/{campaign_id}

Retrieve a specific campaign by ID.

#### POST /api/v1/campaigns

Create a new threat campaign.

**Request Body:**
```json
{
  "name": "APT29",
  "description": "Advanced Persistent Threat 29 campaign",
  "threat_actors": ["APT29", "Cozy Bear"],
  "techniques": ["T1071", "T1074"]
}
```

#### PUT /api/v1/campaigns/{campaign_id}

Update a threat campaign.

#### DELETE /api/v1/campaigns/{campaign_id}

Delete a threat campaign.

### Dark Web

#### GET /api/v1/darkweb

Retrieve dark web sources.

**Query Parameters:**
- `active_only` (boolean): Only return active sources (default: true)

#### GET /api/v1/darkweb/{source_id}

Retrieve a specific dark web source by ID.

#### POST /api/v1/darkweb

Create a new dark web source.

**Request Body:**
```json
{
  "name": "Example Forum",
  "url": "http://example.onion",
  "description": "Dark web forum for threat intelligence",
  "requires_tor": true,
  "scrape_interval_hours": 24
}
```

#### PUT /api/v1/darkweb/{source_id}

Update a dark web source.

#### DELETE /api/v1/darkweb/{source_id}

Delete a dark web source.

#### POST /api/v1/darkweb/{source_id}/scrape

Scrape a specific dark web source.

#### POST /api/v1/darkweb/scrape-all

Scrape all active dark web sources.

#### GET /api/v1/darkweb/status

Get dark web scraping status.

**Response:**
```json
{
  "total_sources": 5,
  "active_sources": 3,
  "recent_scrapes": [
    {
      "name": "Example Forum",
      "last_scrape": "2023-01-15T00:00:00Z",
      "scrape_interval_hours": 24
    }
  ]
}
```

### Jobs

#### GET /api/v1/jobs

Retrieve recent fetch jobs.

**Query Parameters:**
- `limit` (integer): Number of jobs to return (default: 50)

#### GET /api/v1/jobs/{job_id}

Retrieve a specific fetch job by ID.

#### DELETE /api/v1/jobs/{job_id}

Delete a fetch job.

## Error Responses

The API uses standard HTTP status codes and returns error details in JSON format:

```json
{
  "detail": "Error message description"
}
```

Common status codes:
- `400 Bad Request`: Invalid request data
- `401 Unauthorized`: Missing or invalid authentication
- `404 Not Found`: Resource not found
- `422 Unprocessable Entity`: Validation error
- `500 Internal Server Error`: Server error

## Rate Limiting

The API implements rate limiting to prevent abuse:
- 60 requests per minute per IP
- 1000 requests per hour per IP

Rate limit headers are included in responses:
- `X-RateLimit-Limit`: Request limit per window
- `X-RateLimit-Remaining`: Remaining requests in current window
- `X-RateLimit-Reset`: Time when the rate limit resets

## Pagination

List endpoints support pagination with the following parameters:
- `skip`: Number of records to skip
- `limit`: Number of records to return

The response includes pagination metadata:
- `total`: Total number of records
- `page`: Current page number
- `size`: Page size
- `pages`: Total number of pages

## Filtering and Search

Many endpoints support filtering and search:
- **Search**: Full-text search across relevant fields
- **Type filtering**: Filter by indicator type, threat level, etc.
- **Date ranges**: Filter by creation or update dates
- **Tags**: Filter by specific tags

## WebSocket Support

For real-time updates, the API supports WebSocket connections at `/ws` for:
- Real-time indicator updates
- Job status notifications
- Feed fetch progress

## SDKs and Libraries

Official SDKs are available for:
- Python: `pip install cyber-threat-intel-sdk`
- JavaScript/TypeScript: `npm install @cyber-threat-intel/sdk`
- Go: `go get github.com/cyber-threat-intel/sdk`

## Examples

### Python Example

```python
import requests

# Get indicators
response = requests.get(
    "http://localhost:8000/api/v1/indicators",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    params={"indicator_type": "ip", "threat_level": "high"}
)

indicators = response.json()
print(f"Found {len(indicators['items'])} high-threat IP indicators")
```

### JavaScript Example

```javascript
const response = await fetch('http://localhost:8000/api/v1/indicators', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const indicators = await response.json();
console.log(`Found ${indicators.items.length} indicators`);
```

### cURL Example

```bash
# Get indicators
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "http://localhost:8000/api/v1/indicators?indicator_type=ip&threat_level=high"

# Create indicator
curl -X POST \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"indicator_type":"ip","value":"192.168.1.1","threat_level":"high"}' \
     "http://localhost:8000/api/v1/indicators"
```

## Support

For API support and questions:
- Documentation: `/docs` (Swagger UI)
- ReDoc: `/redoc`
- Issues: GitHub repository
- Email: support@cyber-threat-intel.com
