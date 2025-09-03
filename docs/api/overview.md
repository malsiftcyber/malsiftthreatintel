# API Overview

Malsift provides a comprehensive REST API for managing threat intelligence data, feeds, and system configuration.

## Base URL

```
http://localhost:8000/api/v1
```

## Authentication

All API endpoints require authentication. Malsift supports multiple authentication methods:

- **JWT Tokens**: Primary authentication method
- **API Keys**: For service-to-service communication
- **Azure AD**: OAuth2 integration for enterprise deployments

### Getting Started

1. **Obtain Access Token**:
   ```bash
   curl -X POST http://localhost:8000/api/v1/auth/login \
     -H "Content-Type: application/json" \
     -d '{"username": "admin", "password": "admin123"}'
   ```

2. **Use Token in Requests**:
   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" \
     http://localhost:8000/api/v1/indicators
   ```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Internal login |
| POST | `/auth/mfa/login` | MFA verification |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout` | Logout and invalidate token |
| GET | `/auth/azure-ad/login-url` | Get Azure AD login URL |
| POST | `/auth/azure-ad/login` | Azure AD OAuth2 callback |

### Threat Indicators

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/indicators` | List threat indicators |
| GET | `/indicators/{id}` | Get specific indicator |
| POST | `/indicators` | Create new indicator |
| PUT | `/indicators/{id}` | Update indicator |
| DELETE | `/indicators/{id}` | Delete indicator |
| POST | `/indicators/deduplicate` | Run deduplication |
| GET | `/indicators/stats` | Get indicator statistics |

### Threat Intelligence Feeds

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/feeds` | List configured feeds |
| POST | `/feeds` | Add new feed |
| PUT | `/feeds/{id}` | Update feed configuration |
| DELETE | `/feeds/{id}` | Remove feed |
| POST | `/feeds/fetch/{source}` | Manually fetch feed |
| GET | `/feeds/{id}/status` | Get feed status |

## Response Format

All API responses follow a consistent JSON format:

### Success Response

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation completed successfully",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "field": "Field validation failed"
    }
  },
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Testing

### Interactive Documentation

Visit `http://localhost:8000/docs` for interactive API documentation powered by Swagger UI.

## Support

For API support:

1. Open an issue on [GitHub](https://github.com/rebaker501/malsift/issues)
2. Join discussions on [GitHub Discussions](https://github.com/rebaker501/malsift/discussions)
