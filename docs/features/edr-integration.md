# EDR Integration

Malsift provides comprehensive integration with leading Endpoint Detection and Response (EDR) platforms to extract indicators and perform intelligent analysis using Large Language Models (LLMs).

## Supported EDR Platforms

### Crowdstrike Falcon
- **API Integration**: OAuth2 authentication with client credentials
- **Data Sources**: Detections, alerts, events, and threat intelligence
- **Indicator Types**: IP addresses, domains, URLs, file hashes, file paths
- **Extraction Methods**: Real-time and scheduled data extraction

### SentinelOne
- **API Integration**: Token-based authentication
- **Data Sources**: Threats, activities, events, and alerts
- **Indicator Types**: File paths, hashes, URLs, network indicators
- **Extraction Methods**: Automated threat and activity monitoring

### Microsoft Defender for Endpoint
- **API Integration**: Azure AD OAuth2 with tenant-specific authentication
- **Data Sources**: Threat intelligence, alerts, machine actions
- **Indicator Types**: Domains, IPs, URLs, file hashes, emails
- **Extraction Methods**: Comprehensive threat intelligence integration

## LLM-Powered Analysis

### Supported LLM Providers

#### OpenAI (GPT-4)
- **Models**: GPT-4, GPT-3.5-turbo
- **Features**: Advanced threat analysis, reasoning, and recommendations
- **Cost Tracking**: Token-based cost calculation
- **Configuration**: Customizable temperature and token limits

#### Anthropic (Claude)
- **Models**: Claude-3, Claude-2
- **Features**: Detailed threat analysis with high accuracy
- **Cost Tracking**: Token-based cost calculation
- **Configuration**: Customizable parameters for analysis

### Analysis Process

1. **Indicator Extraction**: EDR platforms provide indicators from various sources
2. **Threat Intelligence Check**: Indicators are compared against known threat intelligence
3. **LLM Analysis**: Unknown indicators are analyzed by LLM for malicious potential
4. **Confidence Scoring**: Each analysis includes confidence and malicious probability scores
5. **Actionable Recommendations**: LLM provides specific recommended actions

## Key Features

### Connection Management
- **Multi-Platform Support**: Connect to multiple EDR platforms simultaneously
- **Secure Credential Storage**: Encrypted storage of API keys and credentials
- **Connection Testing**: Validate connections before activation
- **Sync Frequency Control**: Configurable data extraction intervals

### Data Extraction
- **Real-Time Monitoring**: Continuous extraction of new indicators
- **Historical Data**: Access to historical threat data
- **Filtered Extraction**: Customizable filters for specific data types
- **Batch Processing**: Efficient handling of large data volumes

### Intelligent Analysis
- **Threat Intelligence Matching**: Compare against known threat databases
- **LLM-Powered Analysis**: AI-driven analysis of unknown indicators
- **Confidence Scoring**: Quantified assessment of threat likelihood
- **Contextual Analysis**: Consider EDR context and metadata

### Dashboard and Monitoring
- **Real-Time Dashboard**: Live view of EDR integration status
- **Statistics Tracking**: Comprehensive metrics and analytics
- **Cost Monitoring**: Track LLM analysis costs
- **Alert Management**: Notifications for critical findings

## API Endpoints

### Connection Management
```
POST   /api/v1/edr/connections              # Create EDR connection
GET    /api/v1/edr/connections              # List connections
GET    /api/v1/edr/connections/{id}         # Get connection details
PUT    /api/v1/edr/connections/{id}         # Update connection
DELETE /api/v1/edr/connections/{id}         # Delete connection
POST   /api/v1/edr/connections/{id}/test    # Test connection
```

### Data Extraction
```
POST   /api/v1/edr/extractions              # Start extraction
GET    /api/v1/edr/extractions              # List extractions
GET    /api/v1/edr/extractions/{id}         # Get extraction details
```

### Indicator Analysis
```
POST   /api/v1/edr/analyze-indicator        # Analyze single indicator
POST   /api/v1/edr/bulk-analyze-indicators  # Analyze multiple indicators
```

### LLM Configuration
```
POST   /api/v1/edr/llm-configurations       # Create LLM config
GET    /api/v1/edr/llm-configurations       # List configurations
PUT    /api/v1/edr/llm-configurations/{id}  # Update configuration
POST   /api/v1/edr/llm-configurations/{id}/test # Test LLM connection
```

### Dashboard and Statistics
```
GET    /api/v1/edr/dashboard/stats          # Dashboard statistics
GET    /api/v1/edr/connections/{id}/status   # Connection status
```

## Configuration

### Environment Variables
```bash
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4

# Anthropic Configuration
ANTHROPIC_API_KEY=your_anthropic_api_key
ANTHROPIC_MODEL=claude-3-sonnet-20240229

# Database Configuration
DATABASE_URL=postgresql://user:pass@localhost/malsift
REDIS_URL=redis://localhost:6379
```

### Docker Compose Configuration
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    environment:
      - DATABASE_URL=postgresql://postgres:password@postgres:5432/malsift
      - REDIS_URL=redis://redis:6379
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    depends_on:
      - postgres
      - redis
```

## Security Considerations

### API Key Management
- **Encryption**: All API keys are encrypted at rest
- **Access Control**: Role-based access to connection management
- **Audit Logging**: Complete audit trail of connection activities
- **Rotation Support**: Easy key rotation and updates

### Data Privacy
- **Local Processing**: LLM analysis can be configured for local processing
- **Data Minimization**: Only necessary data is sent to LLM providers
- **Retention Policies**: Configurable data retention and cleanup
- **Compliance**: GDPR and SOC2 compliance considerations

### Network Security
- **TLS Encryption**: All API communications use TLS 1.2+
- **Certificate Validation**: Strict certificate validation
- **Proxy Support**: Support for corporate proxy configurations
- **Firewall Rules**: Recommended firewall configurations

## Best Practices

### Connection Setup
1. **Use Dedicated Service Accounts**: Create dedicated API accounts for Malsift
2. **Limit Permissions**: Grant only necessary permissions to service accounts
3. **Monitor Usage**: Regularly monitor API usage and costs
4. **Test Connections**: Always test connections before production use

### LLM Configuration
1. **Model Selection**: Choose appropriate models for your use case
2. **Cost Management**: Set up cost alerts and limits
3. **Temperature Settings**: Adjust temperature for consistent results
4. **Token Limits**: Set appropriate token limits for responses

### Data Management
1. **Extraction Frequency**: Balance between real-time and resource usage
2. **Data Filtering**: Use filters to focus on relevant indicators
3. **Storage Management**: Monitor database growth and cleanup
4. **Backup Strategy**: Implement regular backups of analysis data

## Troubleshooting

### Common Issues

#### Connection Failures
- **Authentication Errors**: Verify API keys and credentials
- **Network Issues**: Check network connectivity and firewall rules
- **Rate Limiting**: Implement appropriate rate limiting
- **Certificate Issues**: Verify SSL certificates and trust chains

#### LLM Analysis Issues
- **API Errors**: Check LLM provider status and quotas
- **Cost Overruns**: Monitor usage and set up alerts
- **Response Quality**: Adjust temperature and prompt engineering
- **Timeout Issues**: Increase timeout values for large analyses

#### Performance Issues
- **Database Performance**: Optimize database queries and indexes
- **Memory Usage**: Monitor memory usage and scale accordingly
- **Concurrent Requests**: Implement proper queuing and throttling
- **Cache Strategy**: Use Redis caching for frequently accessed data

### Monitoring and Alerting
- **Health Checks**: Regular health checks for all components
- **Metrics Collection**: Comprehensive metrics and monitoring
- **Alert Configuration**: Set up alerts for critical issues
- **Log Analysis**: Centralized logging and analysis

## Future Enhancements

### Planned Features
- **Additional EDR Platforms**: Support for more EDR vendors
- **Custom LLM Models**: Support for self-hosted LLM models
- **Advanced Analytics**: Machine learning-based threat scoring
- **Integration APIs**: RESTful APIs for third-party integrations
- **Mobile Support**: Mobile applications for monitoring and management

### Community Contributions
- **Open Source**: Community contributions welcome
- **Documentation**: Help improve documentation and examples
- **Testing**: Contribute test cases and validation scenarios
- **Feature Requests**: Submit feature requests and use cases
