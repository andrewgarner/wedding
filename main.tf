terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "garner-flaherty-wedding"

    workspaces {
      name = "wedding"
    }
  }
}

provider "aws" {
  region = "eu-west-2"
}

resource "aws_route53_zone" "garner_flaherty_wedding_zone" {
  name = "garnerflaherty.wedding."
}
