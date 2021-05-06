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

resource "aws_route53_record" "garner_flaherty_wedding_mx" {
  zone_id = aws_route53_zone.garner_flaherty_wedding_zone.zone_id
  name    = aws_route53_zone.garner_flaherty_wedding_zone.name
  type    = "MX"
  ttl     = 10800

  records = [
    "10 spool.mail.gandi.net.",
    "50 fb.mail.gandi.net."
  ]
}

resource "aws_route53_record" "garner_flaherty_wedding_txt" {
  zone_id = aws_route53_zone.garner_flaherty_wedding_zone.zone_id
  name    = aws_route53_zone.garner_flaherty_wedding_zone.name
  type    = "TXT"
  ttl     = 10800

  records = [
    "v=spf1 include:_mailcust.gandi.net ?all"
  ]
}
