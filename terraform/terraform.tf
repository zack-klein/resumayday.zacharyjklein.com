terraform {

  backend "s3" {
    bucket = "zacharyjklein-state"
    key    = "state/resumayday.zacharyjklein.com.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 2.60"
}

data "aws_acm_certificate" "web_cert" {
  domain      = "zacharyjklein.com"
  most_recent = true
}

module "website" {
  source = "github.com/zack-klein/s3-website"
  bucket_name = "resumayday.zacharyjklein.com"
  acm_arn = data.aws_acm_certificate.web_cert.arn
}
